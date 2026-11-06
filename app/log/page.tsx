

import {writeFile} from "fs/promises"
import path from "path"

async function uploadFile(formData: any) {
    "use server"
    const file = formData.get("file");
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filePath = path.join(process.cwd(), "Logs", file.name);

    await writeFile(filePath, buffer);
}

export default function Log() {
    return (
        <div>
            <form action={uploadFile}>
                <input type="file" name="file" />
                <button type="submit">Upload</button>
            </form>
            
            <h2>List of Logs</h2>
        </div>
    );
}