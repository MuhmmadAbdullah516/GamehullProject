import { useState } from "react";
import { LogOut, Monitor, RefreshCw, Shield } from "lucide-react";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";

const initialDevices = [
  {
    browser: "Chrome",
    current: true,
    id: "current-device",
    ip: "2407:aa80:116:b99d:68d3:e4f:7766:8d73",
    lastActive: "just now",
    os: "Windows 10",
  },
  {
    browser: "Chrome",
    current: false,
    id: "device-2",
    ip: "2407:aa80:116:b99d:68d3:e4f:7766:8d73",
    lastActive: "3 hrs ago",
    os: "Windows 10",
  },
  {
    browser: "Chrome",
    current: false,
    id: "device-3",
    ip: "2407:aa80:116:b99d:2d61:8ceb:cda2:44f3",
    lastActive: "21 hrs ago",
    os: "Windows 10",
  },
  {
    browser: "Chrome",
    current: false,
    id: "device-4",
    ip: "2407:aa80:116:27de:100f:5065:85c4:4c74",
    lastActive: "1 days ago",
    os: "Windows 10",
  },
];
function ActiveDevices() {
  const [devices, setDevices] = useState(initialDevices);
  const [refreshRotation, setRefreshRotation] = useState(0);

  function handleRefreshDevices() {
    setRefreshRotation((current) => current + 360);
  }

  function handleRemoveDevice(deviceId: string) {
    setDevices((current) => current.filter((device) => device.id !== deviceId));
    toast.success("Device logged out successfully.");
  }

  return (
    <div className="space-y-6">
          <section className="rounded-2xl border border-slate-900/10 bg-white p-6 md:p-8 shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all duration-200 dark:border-blue-400/20 dark:bg-[#0e1629] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)]">
            <div className="mb-8 flex items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-slate-100 transition-colors dark:border-blue-400/15 dark:bg-white/[0.06]">
                  <Monitor className="size-6 text-slate-400 dark:text-white/[0.28]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 transition-colors dark:text-white">
                    Active Devices
                  </h2>
                  <p className="text-sm text-slate-500 transition-colors dark:text-white/55">
                    {devices.length} devices connected
                  </p>
                </div>
              </div>

              <Button
                aria-label="Refresh devices"
                className="size-11 rounded-full border border-border bg-slate-100 text-slate-500 hover:text-primary dark:border-blue-400/15 dark:bg-white/[0.06] dark:text-white/55"
                onClick={handleRefreshDevices}
                size="icon"
                type="button"
                variant="outline"
              >
                <RefreshCw
                  className="size-4 transition-transform duration-500 ease-out"
                  style={{ transform: `rotate(${refreshRotation}deg)` }}
                />
              </Button>
            </div>

            <div className="space-y-4">
              {devices.map((device) => (
                <article
                  className="rounded-2xl border border-blue-600/20/40 bg-blue-600/[0.07] p-5 transition-colors dark:border-blue-400/25/60 dark:bg-blue-600/10"
                  key={device.id}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex min-w-0 flex-1 items-start gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors dark:bg-primary/20">
                        <Monitor className="size-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="flex flex-wrap items-center gap-2 break-words text-base font-bold text-slate-900 dark:text-white">
                          {device.browser} <span aria-hidden="true">&middot;</span> {device.os}
                          {device.current ? (
                            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-black uppercase tracking-normal text-white">
                              Current
                            </span>
                          ) : null}
                        </p>
                        <p className="mt-1 break-all font-mono text-sm text-slate-500 dark:text-white/55">
                          {device.ip}
                        </p>
                        <p className="mt-1 text-sm text-slate-500 dark:text-white/55">
                          Last active {device.lastActive}
                        </p>
                      </div>
                    </div>

                    {!device.current ? (
                      <Button
                        className="h-auto shrink-0 rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-bold text-red-500 transition-all hover:bg-red-500/5 dark:border-blue-400/15"
                        onClick={() => handleRemoveDevice(device.id)}
                        type="button"
                        variant="outline"
                      >
                        <LogOut className="size-4" strokeWidth={2.5} />
                        Sign Out
                      </Button>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-900/10 bg-white p-6 md:p-8 shadow-[0_2px_16px_rgb(15_23_42_/_0.07)] transition-all duration-200 dark:border-blue-400/20 dark:bg-[#0e1629] dark:shadow-[0_4px_24px_rgb(0_0_0_/_0.4)]">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-slate-100 transition-colors dark:border-blue-400/15 dark:bg-white/[0.06]">
                <Shield className="size-6 text-slate-400 dark:text-white/[0.28]" />
              </div>
              <div className="flex-1">
                <h2 className="mb-1.5 text-lg font-bold text-slate-900 transition-colors dark:text-white">
                  Security Tip
                </h2>
                <p className="max-w-160 text-sm leading-relaxed text-slate-600 transition-colors dark:text-zinc-400">
                  If you notice any unfamiliar devices, log them out immediately
                  and consider changing your password. Logged out devices will
                  need to sign in again to access your account.
                </p>
              </div>
            </div>
          </section>
        </div>
  );
}

export default ActiveDevices;