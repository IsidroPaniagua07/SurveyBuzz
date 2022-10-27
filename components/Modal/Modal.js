import ReactDom from 'react-dom'

const Modal = ({children, isOpen}) => {
    if(!isOpen) return null

  return ReactDom.createPortal(
  <>
    <div id='portalbackground' className='fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 bg-fadedblack  z-50'>
      <div className='flex bg-white h-[85%] w-1/2 z-51 border border-black'>
        {children}
      </div>
    </div>
  </>,
  document.getElementById('modal-root')
  )
}

export default Modal