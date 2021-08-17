# warn-cookies
Warning cookies for site and public systems.

For use, you just need to put on body html:
```HTML
<link href="main_footer.css" rel="stylesheet">
<script src="main.js"></script>
```

After that, open script tags and call the initial function, sending these params
1. Cookies message; 
2. Privacy politicies message; 
3. Privacy policies page link; 
4. "Button text";

For example:
```HTML
<script>
    init_cookies_warn(
        "Este site usa cookies para garantir que você obtenha a melhor experiência.",
        "Políticas de privacidade",
        "",
        "Aceitar!"
    );
</script>
```

For more examples, see example.html file or send me a message on twitter @lucasmelocvl or email lucas@cleancode.com.br

Be awesome!
