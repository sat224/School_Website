const btn_bars=document.querySelector('#btn_bars');
        const btn_x=document.querySelector('#btn_x');
        const dropdown_menu = document.querySelector(".ContainerMenu");
       
        btn_bars.addEventListener("click", function() {
            btn_bars.style.display = "none";
            dropdown_menu.style.display ='block';
            btn_x.style.display ="block";
            });

        btn_x.addEventListener("click", function() {
            btn_x.style.display ="none";
            btn_bars.style.display = "block";
            dropdown_menu.style.display ='none';
    });