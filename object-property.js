const student =[
    {id:32,name:"first id"},
    {id:43,name:"second id"},
    {id:23,name:"third id"},
    {id:76,name:"fourth id"}
];
const result = student.map(s=>s.name);
const result1 = student.map(s=>s.id);
const result2 = student.filter(s=>s.id>23);
const result3 = student.find(s=>s.id<43);

console.log(result,result1,result2,result3);