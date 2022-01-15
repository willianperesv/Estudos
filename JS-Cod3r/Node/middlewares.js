// middleware pattern (chain of responsibility)

const passo1 = (ctx, next) => {
    ctx.valor1 = 'midi1'
    next()
}

const passo2 = (ctx, next) =>{
    ctx.valor2 = 'midi2'
    next()
}

const passo3 = ctx =>valor3 = 'mid3'

const exec = (ctx,... middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && 
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo3, passo2)
console.log(ctx)