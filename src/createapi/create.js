await db.collection('inventory').insertOne({
    item: 'canvas',
    qty: 100,
    tags: ['cotton'],
    size: { h: 28, w: 35.5, uom: 'cm' }
  });