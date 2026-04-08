use('BD3-NoSQL-ATV2');

// Produtos com preço maior que 700
db['BD3-NoSQL-ATV2'].find({
  preco: { $gt: 700 }
})

// Produtos com preço menor que 450
db['BD3-NoSQL-ATV2'].find({
  preco: { $lt: 450 }
})

// Produtos com preço entre 500 e 950
db['BD3-NoSQL-ATV2'].find({
  preco: {
    $gte: 500,
    $lte: 950
  }
})
