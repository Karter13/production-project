import webpack from "webpack";
//@ts-ignore
import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        // При импорте не дописывается расширение файлов - import {someFn} from "./test";
        extensions: ['.tsx', '.ts', '.js'],
    }
}