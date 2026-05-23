import { Navigate } from "react-router-dom";

import CashoutHeader from "./cashout/CashoutHeader";
import CashoutRequestTab from "./cashout/CashoutRequestTab";
import CashoutTabs from "./cashout/CashoutTabs";
import CashoutWalletsTab from "./cashout/CashoutWalletsTab";
import DeleteWalletModal from "./cashout/DeleteWalletModal";
import useCashoutPage from "./cashout/useCashoutPage";

function CashoutPage() {
  const cashout = useCashoutPage();

  if (!cashout.canViewCashout) {
    return <Navigate replace to="/" />;
  }

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 md:py-16">
      <CashoutHeader />
      <CashoutTabs activeTab={cashout.activeTab} onTabChange={cashout.setTab} />

      {cashout.activeTab === "request" ? (
        <CashoutRequestTab
          filteredGames={cashout.filteredGames}
          gameDropdownRef={cashout.gameDropdownRef}
          gameSearch={cashout.gameSearch}
          onGameSearchChange={cashout.setGameSearch}
          onRedirectToGame={cashout.redirectToGame}
          onSelectGame={cashout.selectGame}
          onSetTab={cashout.setTab}
          onToggleGameList={() => cashout.setShowGameList((isOpen) => !isOpen)}
          selectedGame={cashout.selectedGame}
          showGameList={cashout.showGameList}
        />
      ) : (
        <CashoutWalletsTab
          formState={{
            showAddWalletForm: cashout.showAddWalletForm,
            showMethodList: cashout.showMethodList,
            walletAddress: cashout.walletAddress,
            walletLabel: cashout.walletLabel,
            walletMethod: cashout.walletMethod,
            walletMethodLabel: cashout.walletMethodLabel,
          }}
          onAddFirstWallet={() => cashout.setShowAddWalletForm(true)}
          onAddressChange={cashout.setWalletAddress}
          onLabelChange={cashout.setWalletLabel}
          onOpenDeleteModal={cashout.openDeleteModal}
          onSaveWallet={cashout.handleSaveWallet}
          onSelectWalletMethod={cashout.selectWalletMethod}
          onToggleAddWalletForm={() => cashout.setShowAddWalletForm((isOpen) => !isOpen)}
          onToggleMethodList={() => cashout.setShowMethodList((isOpen) => !isOpen)}
          savedWallets={cashout.savedWallets}
        />
      )}

      {cashout.deleteModal ? (
        <DeleteWalletModal
          onCancel={cashout.closeDeleteModal}
          onConfirm={cashout.removeWallet}
          wallet={cashout.walletToDelete}
        />
      ) : null}
    </main>
  );
}

export default CashoutPage;
