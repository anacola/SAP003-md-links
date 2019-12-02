const mdLinks = require("../index.js");

describe("mdLinks", () => {
  test("should a function", (done) => {
    expect(typeof mdLinks).toBe("function");
    done();
  });

  test("retorna", (done) => {
    mdLinks('./lib/__tests__/text.md')
        .then(result => {
            expect(result).toEqual([
                {href:'https://nodejs.org/pt-br/', title:'Node.js'},
                {href:'https://developers.google.com/v8/', title:'Chrome'}
            ])
            done();
        })
  });

  test("erro", (done) => {
    mdLinks('./lib/__tess__/text.md')
        .catch(err => {
            expect(err).toEqual("ENOENT: no such file or directory, open 'C:\\Users\\anaco\\Desktop\\SAP003-md-links\\lib\\__tess__\\text.md'")
            done();
        })
  });
});

