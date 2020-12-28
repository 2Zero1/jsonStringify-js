const { array } = require("yargs")

const JSON = {
    stringify : (json)=>{
        switch(true){
            case json instanceof Object, json instanceof Array  : return `[]`
            case json instanceof Object : return `{}`
           default : return `${json}`
        }
        
        // if(typeof json == "object"){
        //     return `{}`
        // }else return `${json}`;
    }
    
}

test("parse json with only primitive",() => {
    expect(JSON.stringify(1)).toBe("1");
    expect(JSON.stringify(0.1)).toBe("0.1");
    expect(JSON.stringify(true)).toBe("true");
    expect(JSON.stringify({})).toBe("{}");
    expect(JSON.stringify({a:1})).toBe(`{"a":1}`);

    expect(JSON.stringify([])).toBe("[]");


    }
)