#!/usr/bin/env node

import { exec } from "child_process";
import { join, resolve } from "path";
import { promisify } from "util";
import fs from "fs/promises";

const execAsync = promisify(exec);

async function copyRepo() {
  const [, , repoLink, targetDir = "."] = process.argv;

  if (!repoLink) {
    console.error("🎮 Usage: git copy <repo-link> [target-directory]");
    process.exit(1);
  }

  const tempRepo = `temp-repo-${Date.now()}`;
  const resolvedTargetDir = resolve(targetDir);

  try {
    // Create target directory if it doesn't exist
    await fs.mkdir(resolvedTargetDir, { recursive: true });

    // Clone the repository
    console.log("📥 Cloning repository...");
    await execAsync(`git clone ${repoLink} ${tempRepo}`);

    // Remove .git directory
    console.log("🗑️  Removing git history...");
    await fs.rm(join(tempRepo, ".git"), { recursive: true, force: true });

    // Copy files to target directory
    console.log("📋 Copying files...");
    const files = await fs.readdir(tempRepo);

    for (const file of files) {
      const sourcePath = join(tempRepo, file);
      const targetPath = join(resolvedTargetDir, file);
      await fs.cp(sourcePath, targetPath, { recursive: true });
    }

    // Cleanup temporary directory
    console.log("🧹 Cleaning up...");
    await fs.rm(tempRepo, { recursive: true, force: true });

    console.log(
      `✨ Successfully copied files to ${targetDir} without git history`,
    );
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    // Cleanup on error
    try {
      await fs.rm(tempRepo, { recursive: true, force: true });
    } catch {
      // Ignore cleanup errors
    }
    process.exit(1);
  }
}

copyRepo();
