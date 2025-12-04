import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ORIGIN_DIR = path.join(process.cwd(), 'public-original');
const OUTPUT_DIR = path.join(process.cwd(), 'public');

// 압축 대상 이미지 확장자
const COMPRESS_EXT = ['.jpg', '.jpeg', '.png', '.webp'];

const QUALITY = 80; // 1~100

async function walk(dirPath) {
  const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        return walk(fullPath);
      }
      return [fullPath];
    }),
  );
  return files.flat();
}

function getExt(filePath) {
  return path.extname(filePath).toLowerCase();
}

async function ensureDir(dirPath) {
  await fs.promises.mkdir(dirPath, { recursive: true });
}

// 🔥 public 폴더 비우기
async function clearOutputDir() {
  try {
    await fs.promises.rm(OUTPUT_DIR, { recursive: true, force: true });
  } catch (e) {
    // ignore
  }
  await ensureDir(OUTPUT_DIR);
}

// 이미지 압축 + OUTPUT_DIR 로 저장 (리사이즈 없음)
async function compressAndWrite(inputPath, outputPath, ext) {
  let image = sharp(inputPath).resize({
    width: 2560,
    height: 2560,
    fit: 'inside', // 긴 변을 1920 안으로 맞춤
    withoutEnlargement: true, // 원본이 더 작으면 확대 X
  });

  // 리사이징 없음

  if (ext === '.jpg' || ext === '.jpeg') {
    image = image.jpeg({ quality: QUALITY });
  } else if (ext === '.png') {
    image = image.png({
      quality: QUALITY,
      compressionLevel: 9,
      palette: true,
    });
  } else if (ext === '.webp') {
    image = image.webp({ quality: QUALITY });
  }

  const buffer = await image.toBuffer();
  await fs.promises.writeFile(outputPath, buffer);
}

// 이미지가 아닌 파일은 그냥 복사
async function copyFile(inputPath, outputPath) {
  await fs.promises.copyFile(inputPath, outputPath);
}

async function processFile(inputPath) {
  const rel = path.relative(ORIGIN_DIR, inputPath);
  const outputPath = path.join(OUTPUT_DIR, rel);
  const outputDir = path.dirname(outputPath);

  await ensureDir(outputDir);

  const ext = getExt(inputPath);

  if (COMPRESS_EXT.includes(ext)) {
    await compressAndWrite(inputPath, outputPath, ext);
    console.log(`compressed: ${rel}`);
  } else {
    await copyFile(inputPath, outputPath);
    console.log(`copied    : ${rel}`);
  }
}

async function main() {
  console.log(`Reading from : ${ORIGIN_DIR}`);
  console.log(`Writing to   : ${OUTPUT_DIR}`);

  // 🔥 public 전체 클리어
  console.log('Clearing output directory (public)...');
  await clearOutputDir();

  const allFiles = await walk(ORIGIN_DIR);

  console.log(`Found ${allFiles.length} file(s). Start processing...\n`);

  for (const file of allFiles) {
    try {
      await processFile(file);
    } catch (err) {
      console.error(`Failed: ${path.relative(ORIGIN_DIR, file)}`);
      console.error(err);
    }
  }

  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
