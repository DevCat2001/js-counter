document.addEventListener('DOMContentLoaded', () => {  
    let counter = new Counter('result_area');

    //When user push the + button
    document.querySelector('[name="more"]').addEventListener('click', ()=>{
        counter.increase();
    });

    //When user push the - button
    document.querySelector('[name="less"]').addEventListener('click', ()=>{
        counter.decrease();
    });

});

class Counter{
    constructor(result_area_name){
        let selector = `[name="${result_area_name}"]`;
        this.result_area=document.querySelector(selector);
        this.counter_value=0;
        this.draw();
    }

    increase(){
        this.counter_value++;
        this.draw();
    }

    decrease(){
        this.counter_value--;
        this.draw();
    }

    draw(){
        //This method draws the contents of the counter variable, in the result_area
        this.result_area.innerHTML=this.counter_value;
    }
}