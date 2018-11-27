export interface UploadValidRules{
    size: number,
    type: string
}

export const errorMsgCodes = {
    "INV_FILE_TYPE": {errCode: "INV_FILE_TYPE", errMsg: "The file you have uploaded is invalid type."},
    "INV_FILE_SIZE": {errCode: "INV_FILE_SIZE", errMsg: "The file size is more then expected size."}
}

export interface UploadErr{
    errCode: string,
    errMsg: string
}