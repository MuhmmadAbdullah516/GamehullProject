import { contactInfo, supportTopics } from "./contact-data";

function ContactSidebar() {
  return (
    <aside className="space-y-6 lg:col-span-2">
      <section className="rounded-[1.625rem] border border-card-border bg-white p-8 shadow-card transition-all duration-200 dark:border-card-dark-border dark:bg-card-dark-bg dark:shadow-card-dark">
        <h2 className="mb-6 text-base font-bold text-text-heading dark:text-text-dark-heading">Support Info</h2>
        <div className="space-y-6">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div className="group flex cursor-pointer items-start gap-4" key={item.label}>
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary/5 transition-colors group-hover:bg-primary/10">
                  <Icon className="size-4 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <p className="mb-0.5 text-xs font-bold uppercase tracking-wider text-text-muted dark:text-text-dark-muted">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-text-heading transition-colors dark:text-text-dark-heading">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-[1.625rem] border border-card-border bg-white p-8 shadow-card transition-all duration-200 dark:border-card-dark-border dark:bg-card-dark-bg dark:shadow-card-dark">
        <h2 className="mb-6 text-base font-bold text-text-heading dark:text-text-dark-heading">How we can help</h2>
        <div className="space-y-4">
          {supportTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div className="flex items-start gap-3" key={topic.title}>
                <div className="mt-1 shrink-0">
                  <Icon className="size-3.5 text-primary" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="mb-1 text-sm font-bold leading-none text-text-heading transition-colors dark:text-text-dark-heading">
                    {topic.title}
                  </p>
                  <p className="text-xs text-text-muted transition-colors dark:text-text-dark-muted">
                    {topic.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </aside>
  );
}

export default ContactSidebar;
