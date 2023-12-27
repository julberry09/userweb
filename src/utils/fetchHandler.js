
const API_BASE_URL = "http://localhost:8081";

const ACCESS_TOKEN = "login-token";

export async function call(api, method, request) {
  // 헤더정보 SET
  let headers = new Headers({"Content-Type": "application/json",});

  // 로컬 스토리지에서 ACCESS TOKEN 가져오기
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }
  // 기본 Info
  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    options.body = JSON.stringify(request);
  }

  return fetch(options.url, options)
        .then((response) => {if(response.ok){
                                const contentType = response.headers.get("content-type");
                                if(contentType && contentType.indexOf("application/json") !== -1) {
                                  const json =  response.json();
                                  console.log("ok with json");
                                  return json;
                                }else{
                                  console.log("ok without json");
                                  return response;
                                }
                             }else{
                                console.log("could not fetch the data that resource: error code: ",response.status);
                                throw Error("could not fetch the data that resource");
                             }
         })
        .catch((error) => {
                            alert("처리시 오류가 발생했습니다.");
                            if (error.status === 403) {
                              console.log("403error");
                              window.location.href = "/login"; // redirect
                            }
                            return Promise.reject(error);
         });
}
