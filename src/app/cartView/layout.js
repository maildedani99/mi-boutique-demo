export default function Layout(props) {
  return (
    <div className="flex flex-col container mt-44 mx-auto">
      {props.children}
      <div className="flex flex-col lg:flex-row flex-1 py-20">
        <div className="flex  w-full lg:w-8/12 xl:px-8 px-0 ">{props.cart}</div>
        <div className="flex  w-full lg:w-4/12 px-8">{props.summary}</div>
      </div>
    </div>
  );
}
