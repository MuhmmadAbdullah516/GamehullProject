import { useState } from "react";
import { Trash, MessageSquare, CornerUpLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { ContactMessage, ContactMessageStatus } from "../types/contact";
import mockData from "./data/contact-messages.json";
import ContactMessagesTableRow from "./components/ContactMessagesTableRow";
import ContactMessagesPagination from "./components/ContactMessagesPagination";

const ITEMS_PER_PAGE = 10;

const ContactMessages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>(
    mockData as ContactMessage[]
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [msgToDelete, setMsgToDelete] = useState<ContactMessage | null>(null);
  const [activeMsg, setActiveMsg] = useState<ContactMessage | null>(null);
  const [replyText, setReplyText] = useState("");
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleDelete = (msg: ContactMessage) => {
    setMsgToDelete(msg);
  };

  const handleConfirmDelete = () => {
    if (!msgToDelete) return;
    setMessages((prev) => prev.filter((m) => m.id !== msgToDelete.id));
    toast.success("Message deleted successfully.");
    if (activeMsg?.id === msgToDelete.id) {
      setActiveMsg(null);
    }
    setMsgToDelete(null);
  };

  const handleViewMessage = (msg: ContactMessage) => {
    setActiveMsg(msg);
    setShowReplyForm(false);
    setReplyText("");

    // If message is unread, automatically mark as Read
    if (msg.status === "Unread") {
      setMessages((prev) =>
        prev.map((m) => (m.id === msg.id ? { ...m, status: "Read" } : m))
      );
    }
  };

  const handleToggleStatus = () => {
    if (!activeMsg) return;
    const newStatus: ContactMessageStatus =
      activeMsg.status === "Unread" ? "Read" : "Unread";
    setMessages((prev) =>
      prev.map((m) => (m.id === activeMsg.id ? { ...m, status: newStatus } : m))
    );
    setActiveMsg((prev) => (prev ? { ...prev, status: newStatus } : null));
    toast.success(`Message marked as ${newStatus}.`);
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeMsg || !replyText.trim()) return;

    setMessages((prev) =>
      prev.map((m) =>
        m.id === activeMsg.id ? { ...m, status: "Replied" as const } : m
      )
    );
    toast.success("Reply sent successfully.");
    setActiveMsg(null);
    setShowReplyForm(false);
    setReplyText("");
  };

  const totalPages = Math.ceil(messages.length / ITEMS_PER_PAGE);
  const paginatedMessages = messages.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Contact Messages
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Read and respond to customer queries — {messages.length} total messages.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
              <tr>
                {["Status", "From", "Subject", "Date", "Actions"].map((h) => (
                  <th
                    key={h}
                    className={`px-3.5 py-2.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ${
                      h === "Actions" ? "text-right" : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {paginatedMessages.length > 0 ? (
                paginatedMessages.map((msg) => (
                  <ContactMessagesTableRow
                    key={msg.id}
                    msg={msg}
                    onView={() => handleViewMessage(msg)}
                    onDelete={() => handleDelete(msg)}
                  />
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-8 text-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    No messages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <ContactMessagesPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={messages.length}
          itemsOnPage={paginatedMessages.length}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Read / Detail view Dialog */}
      <Dialog
        open={!!activeMsg}
        onOpenChange={(open) => {
          if (!open) {
            setActiveMsg(null);
            setShowReplyForm(false);
          }
        }}
      >
        <DialogContent className="max-w-xl p-6 rounded-2xl">
          {activeMsg && (
            <div className="space-y-4">
              <div className="border-b border-gray-100 dark:border-gray-700 pb-3">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {activeMsg.subject}
                  </h3>
                  <span
                    className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                      activeMsg.status === "Unread"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        : activeMsg.status === "Read"
                        ? "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                        : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    }`}
                  >
                    {activeMsg.status}
                  </span>
                </div>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex flex-wrap gap-x-4 gap-y-1">
                  <p>
                    From: <span className="font-semibold text-gray-700 dark:text-gray-300">{activeMsg.name}</span> ({activeMsg.email})
                  </p>
                  <p>
                    Received: <span className="font-semibold text-gray-700 dark:text-gray-300">{activeMsg.date}</span>
                  </p>
                </div>
              </div>

              {/* Message content */}
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl text-sm leading-relaxed text-gray-800 dark:text-gray-200 min-h-24 whitespace-pre-wrap">
                {activeMsg.message}
              </div>

              {/* Reply Form */}
              {showReplyForm ? (
                <form onSubmit={handleSendReply} className="space-y-3 pt-3 border-t border-gray-150 dark:border-gray-700">
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Your Response
                  </label>
                  <textarea
                    required
                    placeholder="Type your reply here..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:text-slate-200 min-h-24 placeholder:text-slate-400 dark:placeholder:text-slate-600"
                  />
                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowReplyForm(false)}
                      className="rounded-full px-5 py-4 cursor-pointer text-xs h-9"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-4 cursor-pointer text-xs h-9 flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" /> Send Reply
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-wrap justify-between gap-3 pt-2">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={handleToggleStatus}
                      className="rounded-full px-4 py-4 cursor-pointer text-xs h-9 flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Mark as {activeMsg.status === "Unread" ? "Read" : "Unread"}
                    </Button>
                    {activeMsg.status !== "Replied" && (
                      <Button
                        onClick={() => setShowReplyForm(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-4 cursor-pointer text-xs h-9 flex items-center gap-1.5"
                      >
                        <CornerUpLeft className="w-3.5 h-3.5" />
                        Reply
                      </Button>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setActiveMsg(null);
                    }}
                    className="rounded-full px-5 py-4 cursor-pointer text-xs h-9"
                  >
                    Close
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={!!msgToDelete}
        onOpenChange={(open) => {
          if (!open) setMsgToDelete(null);
        }}
      >
        <DialogContent className="max-w-md p-6 rounded-2xl">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 mb-4">
              <Trash className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
              Confirm Deletion
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Are you sure you want to delete this message from{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {msgToDelete?.name}
              </span>
              ? This action cannot be undone.
            </p>
            <div className="flex gap-3 w-full">
              <Button
                variant="outline"
                onClick={() => setMsgToDelete(null)}
                className="flex-1 rounded-full cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmDelete}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-full cursor-pointer"
              >
                Delete
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactMessages;
