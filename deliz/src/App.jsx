import {useState,useEffect,useRef} from 'react'
import {ShoppingBag,Menu as MenuIcon,X,Plus,Minus} from 'lucide-react'
import {brand,items,cats,gallery,feedback,occasions} from './data/delizSaki'

const LOGO='/images/deliz-saki/logo.webp'
const money=n=>'₹'+n.toLocaleString('en-IN')
function Reveal({children,className='',delay=0}){
  const r=useRef(),[v,setV]=useState(false)
  useEffect(()=>{const o=new IntersectionObserver(([e])=>e.isIntersecting&&setV(true),{threshold:.1});o.observe(r.current);return()=>o.disconnect()},[])
  return <div ref={r} style={{transitionDelay:delay+'ms'}} className={`transition-all duration-700 ${v?'opacity-100 translate-y-0':'opacity-0 translate-y-6'} ${className}`}>{children}</div>
}
const Btn=({href,onClick,children,dark})=>{const c=`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition hover:-translate-y-0.5 ${dark?'bg-cocoa text-cream hover:bg-caramel':'border border-cocoa/40 hover:bg-cocoa hover:text-cream'}`
  return href?<a href={href} target="_blank" rel="noreferrer" className={c}>{children}</a>:<button onClick={onClick} className={c}>{children}</button>}
const Title=({k,children})=><Reveal className="mb-10 max-w-2xl"><p className="text-xs uppercase tracking-[.25em] text-caramel mb-2">{k}</p><h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">{children}</h2></Reveal>

export default function App(){
  const [scrolled,setScrolled]=useState(false),[open,setOpen]=useState(false),[cartOpen,setCartOpen]=useState(false)
  const [cart,setCart]=useState({}),[cat,setCat]=useState('all'),[toast,setToast]=useState(''),[lb,setLb]=useState(null)
  useEffect(()=>{const f=()=>setScrolled(scrollY>40);f();addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[])
  const say=m=>{setToast(m);clearTimeout(say.t);say.t=setTimeout(()=>setToast(''),1800)}
  const add=it=>{setCart(c=>({...c,[it.id]:(c[it.id]||0)+1}));say(`Added to cart: ${it.name}`)}
  const qty=(id,d)=>setCart(c=>{const n=(c[id]||0)+d;const {[id]:_,...rest}=c;return n>0?{...c,[id]:n}:rest})
  const lines=Object.entries(cart).map(([id,q])=>({it:items.find(i=>i.id===id),q}))
  const count=lines.reduce((s,l)=>s+l.q,0)
  const priced=lines.length>0&&lines.every(l=>l.it.price!=null), total=lines.reduce((s,l)=>s+(l.it.price||0)*l.q,0)
  const wa=text=>{if(!brand.whatsapp)return say('WhatsApp number not added yet — set it in data/delizSaki.js');open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`,'_blank')}
  const enquire=()=>wa('Hi Deliz by Saki, I found you through your website and would like to enquire about an order.')
  const order=()=>wa('Hi Deliz by Saki, I would like to enquire about:\n'+lines.map(l=>`• ${l.it.name} × ${l.q}`).join('\n'))
  const links=[['Home','home'],['Menu','menu'],['About','about'],['Gallery','gallery'],['Contact','contact']]

  return <div>
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled?'bg-paper/95 backdrop-blur shadow-sm py-2':'py-4'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-3"><img src={LOGO} alt="Deliz by Saki logo" className={`rounded-full transition-all ${scrolled?'h-10 w-10':'h-14 w-14'}`}/><span className="font-serif text-2xl font-semibold">Deliz <span className="text-base font-normal italic">by Saki</span></span></a>
        <nav className="hidden md:flex items-center gap-8 text-sm">{links.map(([l,h])=><a key={h} href={'#'+h} className="hover:text-caramel">{l}</a>)}</nav>
        <div className="flex items-center gap-3">
          <button onClick={()=>setCartOpen(true)} aria-label="Cart" className="relative p-2"><ShoppingBag size={22}/>{count>0&&<span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-caramel text-[11px] text-white">{count}</span>}</button>
          <span className="hidden md:block"><Btn dark onClick={enquire}>Order / Enquire</Btn></span>
          <button className="md:hidden p-2" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<MenuIcon/>}</button>
        </div>
      </div>
      <div className={`md:hidden overflow-hidden bg-paper transition-all duration-500 ${open?'max-h-96 border-t border-cocoa/10':'max-h-0'}`}>
        <div className="flex flex-col gap-4 px-6 py-5">{links.map(([l,h])=><a key={h} href={'#'+h} onClick={()=>setOpen(false)} className="font-serif text-2xl">{l}</a>)}<Btn dark onClick={enquire}>Order / Enquire</Btn></div>
      </div>
    </header>

    <section id="home" className="bg-cream pt-28 pb-16 md:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2">
        <div className="animate-[fade_1s_ease_both]">
          <p className="text-xs uppercase tracking-[.3em] text-caramel mb-4">Homemade · Wholesome · Heartmade</p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-[1.02]">Sweetness in every bite.</h1>
          <p className="mt-6 max-w-md text-lg text-cocoa/80">Brownies, cookies, brookies and millet-based treats from Deliz by Saki, now available in Chennai. Bulk and custom orders welcome.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Btn dark href="#menu">Explore Desserts</Btn><Btn onClick={enquire}>Order on WhatsApp</Btn></div>
        </div>
        <div className="relative"><img src="/images/deliz-saki/posts/brookie-post.webp" alt="Deliz by Saki Millet Brookie" className="w-full rounded-[2rem] shadow-2xl animate-[fade_1.4s_ease_both]"/></div>
      </div>
    </section>

    <section id="menu" className="mx-auto max-w-7xl px-5 py-20">
      <Title k="The menu">Our treats</Title>
      <div className="mb-8 flex flex-wrap gap-2">{cats.map(([k,l])=><button key={k} onClick={()=>setCat(k)} className={`rounded-full border px-4 py-2 text-sm transition ${cat===k?'bg-cocoa text-cream border-cocoa':'border-cocoa/30 hover:border-cocoa'}`}>{l}</button>)}</div>
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {items.filter(i=>cat==='all'||i.cat===cat).map((it,n)=>
          <Reveal key={it.id} delay={(n%4)*80} className="group flex flex-col overflow-hidden rounded-2xl border border-cocoa/10 bg-white/60 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="aspect-square overflow-hidden"><img loading="lazy" src={it.img} alt={it.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/></div>
            <div className="flex flex-1 flex-col p-4"><h3 className="font-serif text-xl font-semibold leading-tight">{it.name}</h3><p className="mt-1 flex-1 text-sm text-cocoa/70">{it.desc}</p>
              <p className="mt-3 text-sm font-medium text-caramel">{it.price!=null?money(it.price):'Price on enquiry'}</p>
              <button onClick={()=>add(it)} className="mt-3 rounded-full bg-cocoa py-2.5 text-sm text-cream transition hover:bg-caramel">Add to Cart</button></div>
          </Reveal>)}
      </div>
      <p className="mt-6 text-sm text-cocoa/60">Bulk menu: 50 gram / piece · Custom orders available · DM to order · Pickup / Porter available</p>
    </section>

    <section className="bg-cocoa text-cream py-20"><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2">
      <Reveal><img loading="lazy" src="/images/deliz-saki/posts/tubs.webp" alt="Gift tubs" className="rounded-3xl"/></Reveal>
      <Reveal><p className="text-xs uppercase tracking-[.25em] text-caramel mb-2">Custom & bulk orders</p><h2 className="font-serif text-4xl md:text-5xl font-semibold">Made for your moments.</h2>
        <ul className="mt-6 grid grid-cols-2 gap-2 text-cream/90">{occasions.map(o=><li key={o} className="border-b border-cream/20 py-2">{o}</li>)}</ul>
        <p className="mt-6 text-cream/80">Brownie cake pieces and mini cookie, brownie and ragi & jowar cookie tubs are available in bulk, with custom quantity and packaging options. Advance booking required: place your order at least 5 days before your event.</p>
        <div className="mt-8"><button onClick={enquire} className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-cocoa hover:bg-white">Enquire About an Order</button></div></Reveal>
    </div></section>

    <section id="gallery" className="mx-auto max-w-7xl px-5 py-20"><Title k="Gallery">From the Deliz Instagram</Title>
      <div className="columns-2 gap-4 md:columns-3">{gallery.map((g,i)=><Reveal key={g.src} delay={i*60} className="mb-4 break-inside-avoid"><button onClick={()=>setLb(g)} className="group block overflow-hidden rounded-2xl"><img loading="lazy" src={g.src} alt={g.alt} className="w-full transition duration-700 group-hover:scale-105"/></button></Reveal>)}</div></section>

    <section className="bg-cream py-20"><div className="mx-auto max-w-7xl px-5"><Title k="Customer feedback">Kind words, shared by customers</Title>
      <div className="grid gap-6 md:grid-cols-3">{feedback.map((f,i)=><Reveal key={i} delay={i*100} className="rounded-2xl border border-cocoa/10 bg-paper p-6"><p className="font-serif text-xl leading-snug">“{f}”</p><p className="mt-4 text-xs uppercase tracking-widest text-cocoa/50">Customer message · Deliz Instagram Highlights</p></Reveal>)}</div></div></section>

    <section id="about" className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-[auto_1fr]">
      <img loading="lazy" src={LOGO} alt="Deliz by Saki" className="mx-auto h-56 w-56 rounded-full shadow-xl md:h-72 md:w-72"/>
      <Reveal><p className="text-xs uppercase tracking-[.25em] text-caramel mb-2">About</p><h2 className="font-serif text-4xl md:text-5xl font-semibold">Made with love, just for you.</h2>
        <p className="mt-5 max-w-xl text-cocoa/80">{brand.story}</p></Reveal></section>

    <section id="contact" className="bg-cocoa text-cream py-20 text-center"><div className="mx-auto max-w-2xl px-5">
      <h2 className="font-serif text-4xl md:text-5xl font-semibold">Craving something sweet?</h2><p className="mt-4 text-cream/80">Message Deliz by Saki to enquire about desserts and bulk orders.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3"><button onClick={enquire} className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-cocoa">Order / Enquire on WhatsApp</button><a href={brand.instagram} target="_blank" rel="noreferrer" className="rounded-full border border-cream/50 px-6 py-3 text-sm">Instagram</a></div>
      <dl className="mt-10 space-y-1 text-sm text-cream/80"><div>Location: {brand.location} <span className="opacity-60">[full address to be confirmed]</span></div><div>WhatsApp: {brand.whatsapp||'[WhatsApp number]'}</div><div>Hours: {brand.hours||'[Business hours]'}</div></dl></div></section>

    <footer className="bg-paper py-10 text-center text-sm"><img src={LOGO} alt="" className="mx-auto mb-3 h-16 w-16 rounded-full"/><p className="font-serif text-xl">Deliz by Saki</p><p className="text-cocoa/60">{brand.tagline}</p>
      <nav className="my-4 flex justify-center gap-5">{links.map(([l,h])=><a key={h} href={'#'+h}>{l}</a>)}</nav><p className="text-cocoa/50">© 2026 Deliz Saki. All rights reserved.</p></footer>

    {lb&&<div onClick={()=>setLb(null)} className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4"><button className="absolute right-4 top-4 text-white" aria-label="Close"><X/></button><img src={lb.src} alt={lb.alt} className="max-h-[90vh] max-w-full rounded-lg"/></div>}
    <div className={`fixed inset-0 z-50 bg-black/40 transition ${cartOpen?'opacity-100':'pointer-events-none opacity-0'}`} onClick={()=>setCartOpen(false)}/>
    <aside className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-paper shadow-2xl transition-transform duration-500 ${cartOpen?'translate-x-0':'translate-x-full'}`}>
      <div className="flex items-center justify-between border-b border-cocoa/10 p-5"><h3 className="font-serif text-2xl">Your cart ({count})</h3><button onClick={()=>setCartOpen(false)} aria-label="Close cart"><X/></button></div>
      <div className="flex-1 overflow-y-auto p-5">{lines.length===0?<p className="mt-16 text-center text-cocoa/60">Your cart is empty.<br/>Add a treat from the menu.</p>:lines.map(({it,q})=>
        <div key={it.id} className="mb-4 flex gap-3 border-b border-cocoa/10 pb-4"><img src={it.img} alt="" className="h-20 w-20 rounded-xl object-cover"/>
          <div className="flex-1"><p className="font-serif text-lg leading-tight">{it.name}</p><p className="text-sm text-caramel">{it.price!=null?money(it.price*q):'Price on enquiry'}</p>
            <div className="mt-2 flex items-center gap-3"><button onClick={()=>qty(it.id,-1)} aria-label="Decrease" className="rounded-full border p-1"><Minus size={14}/></button>{q}<button onClick={()=>qty(it.id,1)} aria-label="Increase" className="rounded-full border p-1"><Plus size={14}/></button><button onClick={()=>qty(it.id,-q)} className="ml-auto text-xs underline">Remove</button></div></div></div>)}</div>
      {lines.length>0&&<div className="border-t border-cocoa/10 p-5"><div className="mb-3 flex justify-between"><span>Total</span><span className="font-medium">{priced?money(total):'Prices on enquiry'}</span></div>
        <button onClick={order} className="w-full rounded-full bg-cocoa py-3 text-cream hover:bg-caramel">Proceed to Order (WhatsApp enquiry)</button><p className="mt-2 text-center text-xs text-cocoa/50">Demo only: no order is placed.</p></div>}
    </aside>
    <div className={`fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-cocoa px-5 py-3 text-sm text-cream shadow-xl transition-all ${toast?'translate-y-0 opacity-100':'translate-y-4 opacity-0 pointer-events-none'}`}>{toast}</div>
    <style>{`@keyframes fade{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}`}</style>
  </div>
}
