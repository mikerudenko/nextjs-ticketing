function Requirements() {
  return (
    <div className="flex flex-col items-center max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">
        Tickets Booking App Requirements
      </h1>
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] space-y-2">
        <li>
          <strong>Select and Delete seats</strong>
          <ul className="list-disc list-inside">
            <li>
              In Choose Seats row, clicking on + should randomly select
              available seats. Clicking on - should remove randomly selected
              seats, but not those selected by manually clicks.
            </li>
            <li>
              The yellow icon &apos;Selected&apos; under the + sign should show
              total number of selected seats. Right now it always shows 1.
            </li>
            <li>
              In the seat map, clicking on a seat can add or remove it from the
              manullay selected seats.
            </li>
          </ul>
        </li>
        <li>
          <strong>Summary in Details</strong>
          <ul className="list-disc list-inside">
            <li>
              The &apos;Details&apos; row at the bottom should show selected
              seat numbers with their price. The Detail styles are already
              defined in Details component. You don&apos;t need to create style
              for detail item.
            </li>
            <li>
              Clicking on a selected seat in Details directly can unselect it.
            </li>
            <li>
              The Checkout button needs to show the total price for selected
              seats.
            </li>
          </ul>
        </li>
        <li>
          <strong>Add comments to your PR</strong>
          <ul className="list-disc list-inside">
            <li>
              Regarding your design decisions, why did you choose to implement
              the above features this way. Also, please identify and point out
              any issues or inefficiencies in the existing code.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Theme Toggle and Preference Persistence Across Sessions and Devices
          </strong>
          <ul className="list-disc list-inside">
            <li>
              Add a theme toggle button to switch between light and dark modes.
            </li>
            <li>Ensure the theme persists across sessions (same browser).</li>
            <li>
              <strong>Add a comment to your PR:</strong> how would you implement
              a solution to persist the theme across devices?
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default Requirements;
