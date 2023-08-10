import { PipeTransform } from '@nestjs/common';
import { FilesName } from '../constants';
export declare class ValidationFileNameParams implements PipeTransform {
    transform(value: unknown): FilesName | never;
    private isValidName;
}
