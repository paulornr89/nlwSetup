const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);

const data = {
    run: ['01-01','02-01'],
    sleep: ['01-01'],
}

nlwSetup.setData(data)

nlwSetup.load()
