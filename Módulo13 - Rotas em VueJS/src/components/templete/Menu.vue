<template>
    <nav class="menu">

        <!--Posso criar uma ul, e especificar como atributo no router-link que é uma <li> e que quero tbm que seja tag ,a>, n perdendo style-->
            <ul>
                <router-link to="/" tag="li" active-class="active" exact><a>Início</a></router-link>

                <router-link to="/usuario/10" tag="li" active-class="active"><a>Usuário</a> </router-link>

                <router-link to="/usuario/20" tag="li" active-class="active"><a>Menu</a> </router-link>
            </ul>
        
            <!--Uso exect pra menua tivo funcionar, nesse caso, só ser for exatamente um '/' a ativa--> 
    </nav>
</template>