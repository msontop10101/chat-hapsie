// registration/

import instance from "../../../axios";
import { Config } from "../../../Config/Config";

export const loginUser = (data) => {
    return instance.post('api/auth/', data, Config())
}
