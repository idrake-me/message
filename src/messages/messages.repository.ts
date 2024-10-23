import { Injectable } from "@nestjs/common";
import { read } from "fs";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

@Injectable()
export class MessagesRepository {

    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf-8');
        const message = JSON.parse(contents);

        return message[id];
    }

    async findAll() {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);

        return messages;

    }

    async create(content: string) {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999);

        messages[id] = { id, content };

        await writeFile('messages.json', JSON.stringify(messages));
    }
}