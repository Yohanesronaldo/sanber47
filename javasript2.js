const data = [
    { 
  id:'100000057465',
  storageId:'10000008207',
  code: 'A01-01-01-A',
  productId: '110000081009',
  productName: 'FloBrand-DressBSPink',
  productCode: 'FBR00040101', 
  quantity: 76,
  createdTime:'2021-12-21T13:54:48Z'
},
{ 
    id:'100000057466',
  storageId:'10000002181',
  code: 'A01-01-01-A',
  productId: '110000081009',
  productName: 'FloBrand-DressBSPink',
  productCode: 'FBR00040101',   
  quantity: 71,
  createdTime:'2021-12-21T13:54:48Z'
},
{
    id:'00000065224',
    storageId:'10000008884',
    code: 'Tgt00-A-A-01',
    productId: '110000081009',
    productName: 'FloBrand-DressBSPink',
    productCode: 'FBR00040101',   
    quantity: 10,
    createdTime:'2022-02-08T10:35:19Z'
 }

  ];

  let a = 0;
  let b = '';
  for (let i = 0; i < data.length; i++)
  {
    a += data[i].quantity;
    b += 'Storage id ' + data[i].storageId + ': ' + data[i].quantity + ' \n';
  }
  b += 'Total quantity dari semua storageid  adalah: ' + a;
  console.log(b);

  

  
  