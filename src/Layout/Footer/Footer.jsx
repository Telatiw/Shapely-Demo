export default function Footer() {
  return (
    <div className="w-screen flex flex-col gap-3 px-3 py-10 bg-slate-500">
        <h6 className="text-white flex items-center">Theme by Colorlib Powered by WordPress</h6>
        <ul className="flex gap-5 self-end">
            <li><svg className="w-8 h-8 text-white bg-blue-400 rounded-sm p-1 "><use href="#facebook"></use></svg></li>
            <li><svg className="w-8 h-8 text-white bg-black rounded-sm p-1"><use href="#twitter"></use></svg></li>
            <li className="w-8 h-8 text-white text-4xl flex justify-center items-center bg-blue-600 rounded-sm">in</li>
            <li><svg className="w-8 h-8 text-white bg-red-600 rounded-sm p-1"><use href="#youtube"></use></svg></li>
            <li><svg className="w-8 h-8 text-white bg-rose-600 rounded-sm p-1"><use href="#instagram"></use></svg></li>
        </ul>
    </div>
  )
}
