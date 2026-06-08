import { useMemo, useState } from "react";

import TransactionEmptyState from "@/pages/brand/transactions/TransactionEmptyState";
import TransactionFilterBar from "@/pages/brand/transactions/TransactionFilterBar";
import TransactionTable from "@/pages/brand/transactions/TransactionTable";
import { transactions } from "@/pages/brand/transactions/transaction-data";

const perPage = 10;

function TransactionsPage() {
  const [filterGame, setFilterGame] = useState("All Games");
  const [filterStatus, setFilterStatus] = useState("All Status");
  const [filterType, setFilterType] = useState("All Types");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTransactions = useMemo(
    () =>
      transactions.filter((transaction) => {
        const matchType = filterType === "All Types" || transaction.type === filterType;
        const matchGame = filterGame === "All Games" || transaction.game === filterGame;
        const matchStatus = filterStatus === "All Status" || transaction.status === filterStatus;

        return matchType && matchGame && matchStatus;
      }),
    [filterGame, filterStatus, filterType],
  );

  const totalPages = Math.ceil(filteredTransactions.length / perPage) || 1;
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );
  const isFiltered =
    filterType !== "All Types" ||
    filterGame !== "All Games" ||
    filterStatus !== "All Status";

  function resetPage() {
    setCurrentPage(1);
  }

  function resetFilters() {
    setFilterType("All Types");
    setFilterGame("All Games");
    setFilterStatus("All Status");
    resetPage();
  }

  function setPage(page: number) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ behavior: "smooth", top: 0 });
  }

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl md:text-5xl font-black leading-none tracking-normal text-slate-900 transition-colors dark:text-white">
          Transactions
        </h1>
        <p className="mx-auto max-w-[31.25rem] text-base leading-relaxed text-slate-600 transition-colors dark:text-zinc-400 md:text-base">
          View your deposit, cash in, and cash out history in one place
        </p>
      </div>

      <TransactionFilterBar
        filterGame={filterGame}
        filterStatus={filterStatus}
        filterType={filterType}
        isFiltered={isFiltered}
        onGameChange={(value) => {
          setFilterGame(value);
          resetPage();
        }}
        onReset={resetFilters}
        onStatusChange={(value) => {
          setFilterStatus(value);
          resetPage();
        }}
        onTypeChange={(value) => {
          setFilterType(value);
          resetPage();
        }}
      />

      {filteredTransactions.length === 0 ? (
        <TransactionEmptyState isFiltered={isFiltered} />
      ) : (
        <TransactionTable
          currentPage={currentPage}
          onPageChange={setPage}
          perPage={perPage}
          totalCount={filteredTransactions.length}
          totalPages={totalPages}
          transactions={paginatedTransactions}
        />
      )}
    </main>
  );
}

export default TransactionsPage;
