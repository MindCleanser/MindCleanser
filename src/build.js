import { spawn } from "child_process"

spawn('npx', ['commandkit', 'build'], { stdio: 'inherit', shell: true })
