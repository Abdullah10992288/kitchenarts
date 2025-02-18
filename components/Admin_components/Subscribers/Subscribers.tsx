import { GetSubscribers } from "@/components/Actions/SubscribeActions";

export default async function Subscribers() {
  const subscribers = await GetSubscribers();
  return (
    <section className="px-3 sm:px-9 my-5">
      <h2 className="text-[#AD9A74] font-black text-[30px] sm:text-[50px]">
        Subscribers
      </h2>
      <div className="flex items-center justify-center gap-5 max-sm:gap-3 flex-wrap py-5">
        {subscribers.map((data) => (
          <div
            key={data.id}
            className="overflow-hidden border border-[#856B39] rounded-lg p-2"
          >
            <h2 className="font-bold text-[#AD9A74] text-[20px] sm:text-[25px]">
              {data.email}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
