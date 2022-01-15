function money(a, b) {
   console.log(`R$ ${(a + b).toFixed(2).replace('.',',')}`)
}

money(0.1, 0.2)

