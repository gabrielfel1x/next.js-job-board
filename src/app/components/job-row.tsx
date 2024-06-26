export default function JobRow() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4">
      <div className="content-center">
        <picture>
          <img
            className="size-16 p-2"
            src="https://seeklogo.com/images/P/picpay-logo-A98DEA805B-seeklogo.com.png"
            alt="test"
          />
        </picture>
      </div>

      <div className="grow">
        <div className="text-gray-500">PicPay</div>
        <div className="font-bold text-lg">Software Developer</div>
        <div className="text-gray-400 text-sm">
          Remote &middot; Vitória, ES &middot; Full-time
        </div>
      </div>

      <div className="content-end text-gray-400 text-sm">3 weeks ago</div>
    </div>
  );
}
