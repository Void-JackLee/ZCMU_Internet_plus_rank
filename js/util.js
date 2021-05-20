function getResp(res,err) {
    const resp = res.response || res;
    if (resp.status !== 200 || resp.data.status !== 200) {
        err()
        return null;
    }
    return resp;
}