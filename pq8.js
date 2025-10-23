let str = "my name is keshav rana.";

const s_str = str.slice(3,6);
const sp_str = str.indexOf("k");
const ss_str = str.replace("my","I'm");
const s_r_str = ss_str.replace(ss_str.slice(19,23),"rajput");

alert(`From the string \n"${str}" \nafter slice(3,6) \n"${s_str}" \nafter indexOf("k") \n"${sp_str}" \nafter replace my to i'm \n"${ss_str}"\nafter sep. and rep. \n"${s_r_str}`);