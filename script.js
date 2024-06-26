//your JS code here. If required.
Object.prototype.getKeys=function(){
	let x=Object.keys(student);
	return x;
};
let student={
	name:"hz"
}
console.log(student.getKeys());