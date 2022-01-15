// apartir do objeto process conseguimos ler dados do teclado do usuario na entra e saida padrao


// se estiver diferente da lista de argumentos(argv) o -a tem que ser diferente de -1
const anonimo = process.argv.indexOf('-a') !== -1 
//nodeconsole.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')// process.standartoutput(saidapadrao). escreva (string)
    process.exit()
}else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { //entrada padrao (stdin)/ ondata é quando digita algo
        const nome = data.toString().replace('\n', '') // o /n equivale ao enter, neste caso o replace substitui o enter por espaco vazio

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}