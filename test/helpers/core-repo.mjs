import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PACK_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

/** 定位核心仓（兄弟目录 petri-desktop；可用 PETRI_CORE_REPO 覆盖）。 */
export function findCoreRepo() {
  if (process.env.PETRI_CORE_REPO && fs.existsSync(process.env.PETRI_CORE_REPO)) {
    return process.env.PETRI_CORE_REPO;
  }
  const sibling = path.resolve(PACK_ROOT, '..', 'petri-desktop');
  if (fs.existsSync(path.join(sibling, 'package.json'))) return sibling;
  return null;
}

export const PACK_ROOT_EXPORT = PACK_ROOT;
