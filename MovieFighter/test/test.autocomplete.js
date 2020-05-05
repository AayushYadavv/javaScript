/** @format */

beforeEach(() => {
  const root = document.querySelector("#target");
  root.innerHtml = "";
  autocomplete({
    root,
    fetchData() {
      return [{ Title: 'avenger' }, { Title: 'avenger' }, { Title: 'avenger' }];
    },getOptionHtml(movie){
        return movie.Title
    }
  });
});

const halt = (element)=>{
    const dropdown = document.querySelector(element);
    return new Promise((resolve,reject)=>{
        let interval = setInterval(()=>{
            if(document.querySelector(element)){
                resolve();
                clearInterval(timemout)
            }
        },30)

        let timemout = setTimeout(()=>{
            reject()
            clearInterval(interval)
        },2000)
    });
}
it("Shows a autoComplete", () => {
    const dropdown = document.querySelector(".dropdown");  
  expect(dropdown.className).not.to.include("is-active")
});

it("should open dropdown after keywords",async ()=>{
    const dropdown = document.querySelector(".dropdown");  
    const input = document.querySelector(".input")
    input.value = "avenger"
    let  inputEvent = new Event('input')
    input.dispatchEvent(inputEvent)
    await halt('.dropdown-item')
    
    expect(dropdown.className).to.include("is-active")
})
it("Displaying all list",async()=>{
    const input = document.querySelector(".input")
    input.value = "avenger"
    let  inputEvent = new Event('input')
    input.dispatchEvent(inputEvent)
    
    await halt('.dropdown-item')
    const list = document.querySelectorAll('.dropdown-item');
    expect(list).to.have.a.lengthOf(3);
})
