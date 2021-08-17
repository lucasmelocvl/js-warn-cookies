# warn-cookies
Warning cookies for site and public systems.

For use, you just need to put on body html:
```HTML
<script src="https://raw.githubusercontent.com/lucasmelocvl/warn-cookies/660c99f516ea4145b5df5850edf9f8e6ebdf5829/main.js"></script>
```

If you want to put a message on header page, add this:
```HTML
<link href="https://raw.githubusercontent.com/lucasmelocvl/warn-cookies/660c99f516ea4145b5df5850edf9f8e6ebdf5829/main_header.css" rel="stylesheet">
```
Or, if you want to put a message on footer page, add this:
```HTML
<link href="https://raw.githubusercontent.com/lucasmelocvl/warn-cookies/660c99f516ea4145b5df5850edf9f8e6ebdf5829/main_footer.css" rel="stylesheet">
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

You can fork or send improvement to this code.

IMPROVEMENTS:
1. Create dynamic stylesheet by function call, always thinking of making it easier to use the scripts.

Be awesome!
