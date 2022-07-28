enum  Trabalho  {
    Atriz ,
    Padeiro
}

type  Humano  =  {
    nome : string ,
    idade : number ,
    profissão : Trabalho
}

const  pessoa1 : Humano  =  {
    nome : 'maria' ,
    idade : 29 ,
    profissão : Trabalho . Atriz
} ;

const  pessoa2 : Humano  =  {
    nome : 'roberto' ,
    idade : 19 ,
    profissão : Trabalho . Padeiro
} ;

const  pessoa3 : Humano  =  {
    nome : 'laura' ,
    idade : 32 ,
    profissão : Trabalho . Atriz
} ;

const  pessoa4 : Humano  =  {
    nome : "carlos" ,
    idade : 19 ,
    profissão : Trabalho . Padeiro
}