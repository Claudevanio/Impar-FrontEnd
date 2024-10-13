import { NotFoundError, UnexpectedError, ValidationError } from "@/errors";
import { AxiosResponse, HttpStatusCode } from "axios";
import { api } from "./api";
import {
    IGetAllCardReq,
    IGetAllCardRes,
    ICreateCard,
    ICard,
    IUpdateCard,
} from "@/types/card";

const endpoint = "Card";

export const CardService = {
    GetAll: async (queryObject: IGetAllCardReq) => {
        try {
            const res: AxiosResponse = await api.get(`/${endpoint}`, {
                params: {
                    ...queryObject
                },
            });
            return res.data as IGetAllCardRes;
        } catch (error: any) {
            switch (error.statusCode) {
                case HttpStatusCode.BadRequest:
                    throw new ValidationError(error.body.erros);
                case HttpStatusCode.NotFound:
                    throw new NotFoundError();
                default:
                    throw new UnexpectedError();
            }
        }
    },

    Create: async (
        data: ICreateCard
    ) => {
        try {
            const response = await api.post(`/${endpoint}`, data);
            // return response.data as TransactionsContasBancarias;
        } catch (error: any) {
            if (error.response) {
                switch (error.response.status) {
                    case HttpStatusCode.BadRequest:
                        throw new ValidationError(error.response.data.erros);
                    case HttpStatusCode.NotFound:
                        throw new NotFoundError();
                }
            }
            throw new UnexpectedError();
        }
    },

    Update: async (data: IUpdateCard) => {
        try {
            const response = await api.patch(`/${endpoint}`, data);
            // return response.data as data;
        } catch (error: any) {
            if (error.response) {
                switch (error.response.status) {
                    case HttpStatusCode.BadRequest:
                        throw new ValidationError(error.response.data.erros);
                    case HttpStatusCode.NotFound:
                        throw new NotFoundError();
                }
            }
            throw new UnexpectedError();
        }
    },

    Delete: async (id: string) => {
        try {
            const res: AxiosResponse = await api.delete(`/${endpoint}?id=${id}`);
            return res.data;
        } catch (error: any) {
            switch (error.statusCode) {
                case HttpStatusCode.BadRequest:
                    throw new ValidationError(error.body.erros);
                case HttpStatusCode.NotFound:
                    throw new NotFoundError();
                default:
                    throw new UnexpectedError();
            }
        }
    },
};
