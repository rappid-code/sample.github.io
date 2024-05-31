const table = document.getElementById('mytable');

const jexcelData = jexcel(table,{
  data:[['']],
  columns:[
    {type:'text',title:'顧客名'},
    {type:'dropdown',source:[{'id':'1','name':'男'},{'id':'2','name':'女'},{'id':'3','name':'LGBT'}],title:'性別'},
    {type:'checkbox',title:'購入'},
    {type:'calendar',title:'営業予定日'},
    {type:'text',title:'メモ'}
  ]
});

const download=document.getElementById('download');
download.addEventListener('click',() => {
  jexcelData.download();
})
