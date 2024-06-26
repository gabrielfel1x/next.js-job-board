import JobRow from "./job-row";

export default function Jobs() {
  return (
    <div className="bg-slate-100 py-6 rounded-3xl w-full border-t">
      <div className="container">
        <h2 className="font-bold text-xl pb-2">Recent Opportunities</h2>
        <div className="flex flex-col gap-4">
          <JobRow />
        </div>
      </div>
    </div>
  );
}
