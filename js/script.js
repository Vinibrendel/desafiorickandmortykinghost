var url_api = "https://rickandmortyapi.com/api/character/1,3";

$.ajax({
    type: "GET",
    url: url_api,
    dataType: "json",
    success: function(dados){

        // Pegando os dados do personagem 1
        var nome_p1 = dados[0]["name"];
        var genero_p1 = dados[0]["gender"];
        if (genero_p1 == "Male")
            genero_p1 = "Masculino"
        var status_p1 = dados[0]["status"];
        if (status_p1 == "Alive") {
            status_p1 = "Vivo";
        }
        else{
            status_p1 = "Morto";
        }
        var origem_p1 = dados[0]["origin"]["name"];
        if (origem_p1 == "Earth (C-137)") {
            origem_p1 = "Terra";
        }
        var imagem_p1 = dados[0]["image"];

        $("#nome_p1").html(nome_p1);
        $("#genero_p1").html(genero_p1);
        $("#status_p1").html(status_p1);
        $("#origem_p1").html(origem_p1);
        $("#img_p1").attr("src", imagem_p1);

        var ep1_p1 = dados[0]["episode"][0];
        var ep2_p1 = dados[0]["episode"][1];
        var ep3_p1 = dados[0]["episode"][2];
        
        $.ajax({
            type: "GET",
            url: ep1_p1,
            dataType: "json",
            success: function(dados_episodios){
                var nome_ep1_p1 = dados_episodios["name"];
                var temp_ep1_p1 = dados_episodios["episode"];
                var date_ep1_p1 = dados_episodios["air_date"];
                $("#episodios_p1").append(
                    $('<li>').html(nome_ep1_p1 + "<br>" + temp_ep1_p1.replace("S", "T") + "<br>" + date_ep1_p1 + "<br><br>")
                );
            }  
        });
        $.ajax({
            type: "GET",
            url: ep2_p1,
            dataType: "json",
            success: function(dados_episodios){
                var nome_ep2_p1 = dados_episodios["name"];
                var temp_ep2_p1 = dados_episodios["episode"];
                var date_ep2_p1 = dados_episodios["air_date"];
                $("#episodios_p1").append(
                    $('<li>').html(nome_ep2_p1 + "<br>" + temp_ep2_p1.replace("S", "T") + "<br>" + date_ep2_p1 + "<br><br>")         
                );
            }  
        });
        $.ajax({
            type: "GET",
            url: ep3_p1,
            dataType: "json",
            success: function(dados_episodios){
                var nome_ep3_p1 = dados_episodios["name"];
                var temp_ep3_p1 = dados_episodios["episode"];
                var date_ep3_p1 = dados_episodios["air_date"];
                $("#episodios_p1").append(
                    $('<li>').html(nome_ep3_p1 + "<br>" + temp_ep3_p1.replace("S", "T") + "<br>" + date_ep3_p1 + "<br><br>")    
                );
            }  
        });

        // Pegando os dados do personagem 2
        var nome_p2 = dados[1]["name"];
        var genero_p2 = dados[1]["gender"];
        if (genero_p2 == "Female")
            genero_p2 = "Feminino"
        var status_p2 = dados[1]["status"];
        if (status_p2 == "Alive") {
            status_p2 = "Viva";        
        }
        
        var origem_p2 = dados[1]["origin"]["name"];
        if (origem_p2 == "Earth (Replacement Dimension)") {
            origem_p2 = "Terra (Dimensão Substituta)";
        }
        var imagem_p2 = dados[1]["image"];
                
        $("#nome_p2").html(nome_p2);
        $("#genero_p2").html(genero_p2);
        $("#status_p2").html(status_p2);
        $("#origem_p2").html(origem_p2);
        $("#img_p2").attr("src", imagem_p2);

        var ep1_p2 = dados[1]["episode"][0];
        var ep2_p2 = dados[1]["episode"][1];
        var ep3_p2 = dados[1]["episode"][2];
        $.ajax({
            type: "GET",
            url: ep1_p2,
            dataType: "json",
            success: function(dados_episodios){
                var nome_ep1_p2 = dados_episodios["name"];
                var temp_ep1_p2 = dados_episodios["episode"];
                var date_ep1_p2 = dados_episodios["air_date"];
                $("#episodios_p2").append(
                    $('<li>').html(nome_ep1_p2 + "<br>" + temp_ep1_p2.replace("S", "T") + "<br>" + date_ep1_p2 + "<br><br>")
                );
            }  
        });
        $.ajax({
            type: "GET",
            url: ep2_p2,
            dataType: "json",
            success: function(dados_episodios){
                var nome_ep2_p2 = dados_episodios["name"];
                var temp_ep2_p2 = dados_episodios["episode"];
                var date_ep2_p2 = dados_episodios["air_date"];
                $("#episodios_p2").append(
                    $('<li>').html(nome_ep2_p2 + "<br>" + temp_ep2_p2.replace("S", "T") + "<br>" + date_ep2_p2 + "<br><br>")         
                );
            }  
        });
        $.ajax({
            type: "GET",
            url: ep3_p2,
            dataType: "json",
            success: function(dados_episodios){
                var nome_ep3_p2 = dados_episodios["name"];
                var temp_ep3_p2 = dados_episodios["episode"];
                var date_ep3_p2 = dados_episodios["air_date"];
                $("#episodios_p2").append(
                    $('<li>').html(nome_ep3_p2 + "<br>" + temp_ep3_p2.replace("S", "T") + "<br>" + date_ep3_p2 + "<br><br>")    
                );
            }  
        });
    }
})