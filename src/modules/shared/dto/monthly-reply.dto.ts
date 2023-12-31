import { StatusCodes } from "http-status-codes";

export interface IEstimateOkReplyDTO {
  status: StatusCodes.OK | StatusCodes.CREATED;
  data: unknown;
}

export interface IEstimateCreatedReplyDTO extends IEstimateOkReplyDTO {
  status: StatusCodes.CREATED;
  data: {
    object_id: string;
  };
}

export interface IEstimateErrorReplyDTO {
  status:
    | StatusCodes.BAD_REQUEST
    | StatusCodes.INTERNAL_SERVER_ERROR
    | StatusCodes.NOT_FOUND;
  data: {
    error: string;
  };
}

export interface IEstimateBadRequestReplyDTO extends IEstimateErrorReplyDTO {
  status: StatusCodes.BAD_REQUEST;
  data: {
    error: string;
  };
}

export interface IEstimateNotFoundReplyDTO extends IEstimateErrorReplyDTO {
  status: StatusCodes.NOT_FOUND;
  data: {
    error: string;
  };
}

export interface IEstimateInternalServerReplyDTO
  extends IEstimateErrorReplyDTO {
  status: StatusCodes.INTERNAL_SERVER_ERROR;
  data: {
    error: string;
  };
}
