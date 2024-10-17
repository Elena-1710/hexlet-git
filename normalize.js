import _ from "lodash";

const obj = {
    name: "ДеСТРУКтуриЗАция",
    description: "КАК удивить ДРУЗЕЙ?"
}
const normalize = (obj) =>{
   obj.name = _.capitalize (obj.name);
    obj.description = obj.description.toLowerCase();
}
normalize(obj);
console.log(obj)
