function init_cookies_warn(
    cookies_msg,
    policies_msg,
    policies_link,
    btn_msg
) {
    
    this.cookies_msg = cookies_msg ? cookies_msg : "Este site usa cookies para garantir que você obtenha a melhor experiência.";
    this.policies_msg = policies_msg ? policies_msg : "Políticas de privacidade";
    this.policies_link = policies_link ? policies_link : "#";
    this.btn_msg = btn_msg ? btn_msg : "Aceitar!";
    const divBox = document.createElement("div");

    const acceptCookies = () => {
        localStorage.setItem("pureJavaScriptCookies", "accept");
        divBox.classList.add("hide");
    };
    
    if (!localStorage.pureJavaScriptCookies) {
        divBox.classList.add("warn-cookies-box");
        
        let divMsg = document.createElement("div");
        divMsg.classList.add("warn-cookies-msg");
        let pMsg = document.createElement("p");
        pMsg.innerHTML = this.cookies_msg;
        let aMsg = document.createElement("a");
        aMsg.innerHTML = this.policies_msg;
        aMsg.href = this.policies_link;
        aMsg.classList.add("warn-cookies-msg-policies");

        divMsg.appendChild(pMsg);
        divMsg.appendChild(aMsg);

        let btn = document.createElement("button");
        btn.innerHTML = this.btn_msg;
        btn.classList.add("warn-cookies-btn");
        btn.addEventListener('click', acceptCookies);

        divBox.appendChild(divMsg);
        divBox.appendChild(btn);

        let body = document.getElementsByTagName("body");
        body[0].appendChild(divBox);   
    }

};
