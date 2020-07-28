    //----------------------------------------------------//
    //-----------------  EXIBIR DATA  --------------------//
    //----------------------------------------------------//
    var textoDiv = document.querySelector('div#hoje');
    var estacaoNouS = true;

    //### CONFIGURAR SISTEMA DE DIAS PASSADOS DESDE A FORMAÇÃO ###//
    const now      = moment(new Date());                      // Data de hoje
    const past     = moment("2020-07-14");                    // Outra data no passado
    const duration = moment.duration(now.diff(past));
    const days     = Math.abs(duration.asDays() + 256743);    // Mostra a diferença em dias
    //                                            ^^^^^^
    //                                            Dias passados desde 29/07/1317

    //###--- Operando com os valores ---###//
    const year           = Math.abs(days / 364);
    const aYearInCourse  = Math.abs(year - Math.floor(year));
    const yearDays       = Math.abs(364 * (aYearInCourse - Math.floor(aYearInCourse)));
    const season         = Math.abs(yearDays / 91);
    const day            = Math.abs(91 * (season - Math.floor(season)));

    //###--- Atribuindo valores às variáveis da exibição ---###//
    var ano           = Math.floor(year);
    var dia           = Math.ceil(day);
    var estacaoCodigo = Math.floor(season);

    //###--- Exibição ---###//
    NorthAndSouth();

    function NorthAndSouth() {
        btnNouS = document.querySelector('button#NouS');

        if (btnNouS.value == "Sul") {
            btnNouS.value = "Norte";
            btnNouS.innerText = "Norte";

            if (estacaoCodigo == 0) {
                estacao = "da <strong>Primavera</strong>";
            } else if (estacaoCodigo == 1) {
                estacao = "do <strong>Verão</strong>";
            } else if (estacaoCodigo == 2) {
                estacao = "do <strong>Outono</strong>";
            } else {
                estacao = "do <strong>Inverno</strong>";
            }
        } else {
            btnNouS.value = "Sul";
            btnNouS.innerText = "Sul";
            
            if (estacaoCodigo == 0) {
                estacao = "da <strong>Outono</strong>";
            } else if (estacaoCodigo == 1) {
                estacao = "do <strong>Inverno</strong>";
            } else if (estacaoCodigo == 2) {
                estacao = "do <strong>Primavera</strong>";
            } else {
                estacao = "do <strong>Verão</strong>";
            }
        }
        
        textoDiv.innerHTML = `Primeira Era, Ano <strong>${ano}</strong> - <strong>${dia}º</strong> dia ${estacao}`
    }
