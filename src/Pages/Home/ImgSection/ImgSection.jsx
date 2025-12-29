export default function ImgSection() {
    let images = ['/p15.jpg','/p14.jpg','/p13.jpg','/p12.jpg','/p11.jpg','/p10.jpg','/p9.jpg','/p8.jpg','/p7.jpg','/p6.jpg']
  return (
    <div className="w-screen bg-black grid grid-cols-1 auto-rows-[200px] md:grid-cols-4 md:auto-rows-[300px]">
        {images.map((img,index) => (
        <div key={index} style={{backgroundImage:`url(${img})`}} className="bg-center bg-cover" ></div>
        ))}
    </div>
  )
}