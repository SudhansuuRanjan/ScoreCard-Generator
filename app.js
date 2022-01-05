const getCertificate = document.querySelector('.getCert')

getCertificate.addEventListener("click" ,()=>{
let StudentName = document.querySelector('.name').value.toString();
let Rollno = document.querySelector('.roll').value.toString();
let Program = document.querySelector('.program').value.toString();
let Branch = document.querySelector('.branch').value.toString();
let CourseCode = document.querySelector('.coursecode').value.toString();
let CourseName = document.querySelector('.coursename').value.toString();
let Semester = document.querySelector('.semester').value.toString();
let DateOfEx = document.querySelector('.dateofexam').value.toString();
let Examiner = document.querySelector('.examiner').value.toString();
let Marks1 = document.querySelector('.marks1').value.toString();
let Marks2 = document.querySelector('.marks2').value.toString();
let Marks3 = document.querySelector('.marks3').value.toString();
let Marks4 = document.querySelector('.marks4').value.toString();
let Marks5 = document.querySelector('.marks5').value.toString();

let Total = parseInt(Marks1) + parseInt(Marks2) + parseInt(Marks3) + parseInt(Marks4) + parseInt(Marks5) ;
let TotalMarks = Total.toString();

   generatePDF(StudentName , Rollno , Program , Branch , CourseCode , CourseName , Semester , DateOfEx , Marks1 , Marks2 , Marks3 , Marks4 , Marks5 ,TotalMarks  , Examiner);
})


const generatePDF = async (name , roll ,program , branch , courseCode , courseName , Semester , DateOfExam , m1 , m2 , m3 , m4 , m5 , total , examiner ) => {
  const { PDFDocument, rgb } = PDFLib;

  const exBytes = await fetch("./marksheet.pdf").then((res) => {
    return res.arrayBuffer();
  });

  const exFont = await fetch("./Roboto-Medium.ttf").then((res) => {
    return res.arrayBuffer();
  }); 

  const pdfDoc = await PDFDocument.load(exBytes);

  pdfDoc.registerFontkit(fontkit);
  const myFont = await pdfDoc.embedFont(exFont);

  const pages = pdfDoc.getPages();
  const firstPg = pages[0]

  firstPg.drawText(roll,{
      x: 160,
      y: 705,
      size:23,
      font: myFont
  })

  firstPg.drawText(name,{
      x: 160,
      y: 670,
      size:23,
      font: myFont
  })

  firstPg.drawText(program,{
      x: 200,
      y: 628,
      size:23,
      font: myFont
  })

  firstPg.drawText(branch,{
      x: 200,
      y: 592,
      size:23,
      font: myFont
  })

  firstPg.drawText(courseCode,{
      x: 200,
      y: 552,
      size:23,
      font: myFont
  })

  firstPg.drawText(courseName,{
      x: 200,
      y: 516,
      size:23,
      font: myFont
  })

  firstPg.drawText(Semester,{
      x: 200,
      y: 478,
      size:23,
      font: myFont
  })

  firstPg.drawText(DateOfExam,{
      x: 200,
      y: 438,
      size:23,
      font: myFont
  })

   firstPg.drawText(m1,{
      x: 65,
      y: 260,
      size:23,
      font: myFont
  })

  firstPg.drawText(m2,{
      x: 115,
      y: 260,
      size:23,
      font: myFont
  })

  firstPg.drawText(m3,{
      x: 175,
      y: 260,
      size:23,
      font: myFont
  })

  firstPg.drawText(m4,{
      x: 225,
      y: 260,
      size:23,
      font: myFont
  })

  firstPg.drawText(m5,{
      x: 275,
      y: 260,
      size:23,
      font: myFont
  })

  firstPg.drawText(total,{
      x: 585,
      y: 260,
      size:23,
      font: myFont
  })

  firstPg.drawText(examiner,{
      x: 100,
      y: 192,
      size:23,
      font: myFont
  })

  const uri = await pdfDoc.saveAsBase64({ dataUri: true });
  
  saveAs(uri, roll +" "+ courseCode+" ScoreCard "+name +".pdf",{autoBom: true})

};


